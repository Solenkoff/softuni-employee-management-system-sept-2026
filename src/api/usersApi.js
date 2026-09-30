const baseUrl = 'https://zkkoreczibrcyvogpget.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_WC8S0kzBzppRspsAbmwYOg_Yv01NV90';


export async function fetchUsers() {
    const response = await fetch(baseUrl, {
        headers: {
            'apikey': apiKey,
        }
    });
    const data = await response.json();
    return data;
}