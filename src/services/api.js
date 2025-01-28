export const housingRequest = async () => {
    try{
        const reponse = await fetch("/housing.json");
        if (!reponse.ok){
            throw new Error("Erreur chargement des données");
        }
        let data = await reponse.json();
        return data;
    }catch(error){
        return (error.message);
    }

};