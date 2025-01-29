const request = async (url) => {
    try{
        const reponse = await fetch(url);
        if (!reponse.ok){
            throw new Error("Erreur chargement des données");
        }
        let data = await reponse.json();
        return data;
    }catch(error){
        return (error.message);
    }
};
export const housingRequest = async () => {
    return await request("/housing.json");
};
export const aboutSectionRequest = async () => {
    return await request("/aboutSection.json");
};