import React from 'react';
import styles from './ProprietaireProfile01Form.module.css';

const ProprietaireProfile01Form = () => {
    return (
        <div className={styles.main}>
            <div className={styles.top}></div>

            <div className={styles.middle}>

                {/*-- FIRST -- --*/}
                <div className={styles.first}>

                    <div className={styles.infoSet}>
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" id="lastname" />
                    </div>

                    <div className={styles.infoSet}>
                        <label htmlFor="telephoneFixe">Téléphone Fixe</label>
                        <input type="text" id="telephoneFixe" />
                    </div>

                    <div className={styles.infoSet}>
                        <label htmlFor="adress">Adresse</label>
                        <input type="text" id="adress" placeholder="Numéro de la voie" />
                    </div>

                    <div className={styles.select}>
                        <label htmlFor="pays">Pays</label>
                        <select name="pays" id="pays">
                            <option value="france">France</option>
                            <option value="usa">USA</option>
                            <option value="england">England</option>
                        </select>
                    </div>

                    <div className={styles.select}>
                        {/* <img src={arrow} alt="arrow-down" /> */}
                        <label htmlFor="situationFamilial">Situation familiale</label>
                        <select name="situationFamilial" id="situationFamilial">
                            <option value="marie">Marié(e)</option>
                            <option value="selebataire">Selebataire</option>
                            <option value="divorce">Divorcé(e)</option>
                        </select>
                    </div>

                </div>

                {/*-- SECOND -- --*/}
                <div className={styles.second}>

                    <div className={styles.infoSet}>
                        <label htmlFor="firstname">Prénom*</label>
                        <input type="text" id="firstname" />
                    </div>

                    <div className={styles.infoSet}>
                        <label htmlFor="telephonePortable">Téléphone Portable*</label>
                        <input type="text" id="telephonePortable" />
                    </div>

                    <div className={styles.select}>
                        <label htmlFor="indiceDeReception" style={{ opacity: 0 }}>Indice de répétition</label>
                        <select name="indiceDeReception" id="indiceDeReception">
                            <option value="indiceDeReception">Indice de répétition</option>
                            <option value="usa">USA</option>
                            <option value="england">England</option>
                        </select>
                    </div>

                    <div className={styles.infoSet}>
                        <label htmlFor="ville">Ville</label>
                        <input type="text" id="vile" />
                    </div>

                    <div className={styles.infoSet}>
                        <input type="file" id="contractDeMariage" hidden />
                        <label>Contrat de mariage*</label>
                        <label htmlFor="contractDeMariage">Choisir un fichier</label>
                    </div>

                </div>

                {/*-- THIRD -- --*/}
                <div className={styles.third}>

                    <div className={styles.infoSet}>
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" />
                    </div>

                    <div className={styles.infoSet}>
                        <input type="file" id="pieceIdentite" hidden />
                        <label>Pièce d’identité*</label>
                        <label htmlFor="pieceIdentite">Choisir un fichier</label>
                    </div>

                    <div className={styles.select}>
                        <label htmlFor="typeDeVoie" style={{ opacity: 0, margin: 0 }}>Indice de répétition</label>
                        <select name="typeDeVoie" id="typeDeVoie">
                            <option value="typeDeVoie">Type de voie</option>
                            <option value="usa">USA</option>
                            <option value="england">England</option>
                        </select>
                    </div>

                    <div className={styles.infoSet}>
                        <label htmlFor="codePostale">Code postale</label>
                        <input type="text" id="codePostale" />
                    </div>

                </div>

                {/*-- FOURTH -- --*/}
                <div className={styles.fourth}>

                    <div className={styles.infoSet}>
                        <label htmlFor="iban">RIB/ IBAN bancaire*</label>
                        <input type="text" id="iban" placeholder="RIB / IBAN" />
                    </div>

                    <div className={styles.infoSet} style={{ opacity: 0 }}>
                        <label htmlFor="libelle">Libellé</label>
                        <input type="text" id="iban" placeholder="Libellé" />
                    </div>

                    <div className={styles.infoSet}>
                        <label htmlFor="libelle" style={{ opacity: 0 }}>Libellé</label>
                        <input type="text" id="iban" placeholder="Libellé" />
                    </div>


                </div>


            </div>
            {/*-- end middle --*/}

            <div className={styles.bottom}></div>
        </div>
    )
};

export default ProprietaireProfile01Form;