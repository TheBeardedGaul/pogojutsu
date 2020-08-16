import React from "react";
import styles from "./Pokemon.module.scss";
import { PokemonProps, Pokemon } from "./Pokemon.model";
import { usePokeApi } from "./Pokemon.hook";
import pokemonTranslate from "pokemon";
import { Translate } from "../i18n";
import Context from "../i18n/context";
import { Type } from "./Type/TypeModel";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { MoveSet } from "./Move/MoveSet";
/*
  Ce composant sert à charger et à afficher les informations d'un Pokemon
  sous la forme d'une carte.
  Il prend une prop "id" et fait un appel à l'API de Pokeapi en utilisant cet id lorsqu'il est monté.
  Il affiche "Loading" pendant le chargement, puis les informations du Pokemon dès que l'appel API est fini.
*/

interface LocalProps {
  pokemon: PokemonProps;
  movesData?: any[];
  rank?: number;
  getURLToPokemonDetails?: (pokemon: PokemonProps) => string;
}

export const PokemonCard: React.FC<LocalProps> = ({
  pokemon,
  movesData,
  rank,
  getURLToPokemonDetails,
}) => {
  const { data, error } = usePokeApi(pokemon);

  const renderCard = () => {
    return (
      <Card className={`${styles.pokemonCard} pokemonCard`}>
        <CardContent className={styles.CardContent}>
          {renderError(error, pokemon.speciesId)}
          {renderLoader(data, error, pokemon.speciesId)}
          {data !== undefined && (
            <>
              <div className={styles.CardImage}>
                <img
                  src={data.sprites.front_default}
                  alt={`Sprite for ${pokemon.speciesId}`}
                />
                {data && data.shadow && (
                  <img
                    className={styles.ShadowIcon}
                    src="https://silph.gg/img/icon-shadow-purple.png"
                    alt={"shadow"}
                  />
                )}
              </div>
              <div className={styles.cardText}>
                <h3>
                  {data.id <= 810 && (
                    <Context.Consumer>
                      {(value) =>
                        pokemonTranslate.getName(
                          data.id,
                          value.lang === "es" ? "en" : value.lang
                        )
                      }
                    </Context.Consumer>
                  )}
                </h3>
                <MoveSet
                  fastMove={data.fastMove}
                  firstChargedMove={data.chargedMoves[0]}
                  secondChargedMove={data.chargedMoves[1]}
                  moves={movesData}
                />
              </div>
            </>
          )}
        </CardContent>
        <CardActions className={styles.CardBottom}>
          <div className={styles.rank}>#{rank}</div>
          <div className={styles.types}>
            {data &&
              data.types.map((element: Type, index: number) => {
                return (
                  <>
                    {index > 0 ? " / " : ""}
                    <Translate
                      key={`${element.toString()}-${index}}`}
                      id={`types.${element.toString()}`}
                    />
                  </>
                );
              })}
          </div>
          <div className={styles.score}>
            {data &&
              (data.score.toString().length !== 2
                ? `${data.score}%`
                : `${data.score}.0%`)}
          </div>
        </CardActions>
      </Card>
    );
  };

  return (
    <>
      {getURLToPokemonDetails && (
        <a className="pokemonCardLink" href={getURLToPokemonDetails(pokemon)}>
          {renderCard()}
        </a>
      )}
      {!getURLToPokemonDetails && <>{renderCard()}</>}
    </>
  );
};

function renderError(error: string | null, speciesId: string): JSX.Element {
  return (
    <>
      {error !== null && (
        <div className="error">
          <strong>Error loading Pokemon {speciesId}.</strong>
          <br />
          {error}
        </div>
      )}
    </>
  );
}

function renderLoader(
  data: Pokemon | undefined,
  error: string | null,
  speciesId: string
): JSX.Element {
  return (
    <>
      {data === undefined && error === null && (
        <strong>Loading Pokemon {speciesId}...</strong>
      )}
    </>
  );
}
