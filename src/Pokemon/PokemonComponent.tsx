import React from "react";
import styles from "./Pokemon.module.scss";
import { PokemonProps } from "./Pokemon.model";
import { usePokeApi /*, useFormatedTypes*/ } from "./Pokemon.hook";
import pokemonTranslate from "pokemon";
import { Translate } from "../i18n";
import Context from "../i18n/context";
import { Type } from "./Type/TypeModel";
/*
  Ce composant sert à charger et à afficher les informations d'un Pokemon
  sous la forme d'une carte.
  Il prend une prop "id" et fait un appel à l'API de Pokeapi en utilisant cet id lorsqu'il est monté.
  Il affiche "Loading" pendant le chargement, puis les informations du Pokemon dès que l'appel API est fini.
*/

interface LocalProps {
  pokemon: PokemonProps;
  rank: number;
}

export const PokemonComponent: React.FC<LocalProps> = ({pokemon, rank}) => {
  const { data, error } = usePokeApi(pokemon);
  // const formatedTypes = useFormatedTypes((data) ? data.types : []);

  return (
    <div className={styles.pokemonCard}>
      {error !== null && (
        <div className="error">
          <strong>Error loading Pokemon {pokemon.speciesId}.</strong>
          <br />
          {error}
        </div>
      )}

      {data === undefined && error === null && (
        <strong>Loading Pokemon {pokemon.speciesId}...</strong>
      )}

      {data !== undefined && (
        <>
          <div className="BadgeContainer">
            <span className="badge">
              {(data.score.toString().length !==2) ? data.score : `${data.score}.0`}
            </span>
          </div>
          <h1>
            <Context.Consumer>{value => pokemonTranslate.getName(data.id, (value.lang === "es") ? "en" : value.lang)}</Context.Consumer>
          </h1>
          <div className="CardBody">
            <div className="cardImage">
              <img src={data.sprites.front_default} alt="Sprite" />
            </div>
            <div className={styles.cardMoves}>
              <p>
                <Translate id={`moves.fastMoves.${data.fastMove.name}`} />
              </p>
              <p>
                <Translate id={`moves.chargedMoves.${data.chargedMoves[0].name}`} />
              </p>
              <p>
                <Translate id={`moves.chargedMoves.${data.chargedMoves[1].name}`} />
              </p>
            </div>
          </div>
          <p className={styles.cardTypes}>
            {
              data.types.map((element: Type, index: number) => {
                return (
                  <>
                    {(index > 0) ? " / " : ""}
                    <Translate key={`${element.toString()}-${index}}`} id={`types.${element.toString()}`} />
                  </>
                );
              })
            }
            
          </p>
        </>
      )}
      <span className="rank">
        #{rank}
      </span>
    </div>
  );
}
