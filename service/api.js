const API_URL = 'https://rickandmortyapi.com/api';

const get = url => $.ajax({ url, type: 'GET' });

export async function getCharacterList(params = '') {
    const { info, results } = await get(`${API_URL}/character?${params}`);
    const pagination = { next: info.next, previous: info.prev };
    return { pagination, characters: results };
}

export function getCharacter(id) {
    try {
        return get(`${API_URL}/character/${id}`);
    } catch ({ responseJSON }) {
        throw Error(responseJSON.error);
    }
}
