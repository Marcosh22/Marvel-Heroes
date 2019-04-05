const apikey = "a560a72fdcfa5f0fa820261be8f1070c";

const getUrl = (name) => `https://cors-anywhere.herokuapp.com/https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&orderBy=name&apikey=${apikey}`;

const Marvel = {
    searchHero(name) {

        let url = getUrl(name);
        let auth = {
            headers: {
                Authorization: `Bearer ${apikey}` 
            }
        }

        return fetch(url, auth).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.data) {
                return jsonResponse.data.results.map(result => {
                    return result;
                });
            }
        });
    },
}

export default Marvel;