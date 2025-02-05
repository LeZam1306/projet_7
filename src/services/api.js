const request = async (url) => {
        const reponse = await fetch(url);
        if (!reponse.ok){
            throw new Error("Erreur chargement des données");
        }
        let data = await reponse.json();
        return data;
};
export const housingRequest = async () => {
    return await request("/housing.json");
};
export const aboutSectionRequest = async () => {
    return await request("/aboutSection.json");
};