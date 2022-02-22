const base = 'https://newsapi.org/v2/everything';
const key = 'ca4cd875ba4540fb9e8d647d2683c569';
const root = 'bitcoin';

const uri = `${base}?q=${root}&page=1&apikey=${key}`;

export const api = {
    news: {
        fetch: async () => {
            return await fetch(`${uri}`);
        },
    },
};
