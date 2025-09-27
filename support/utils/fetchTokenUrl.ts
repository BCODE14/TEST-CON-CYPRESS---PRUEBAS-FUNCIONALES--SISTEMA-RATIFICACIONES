import axios from "axios";

interface LoginResponse {
    accessToken: string;
}
async function login(params: {
    clientId: string;
    clientSecret: string;
    realm: string;
    granType: string;
}): Promise<LoginResponse> {
    const data = JSON.stringify({
        client_id: params.clientId,
        client_secret: params.clientSecret,
        realm: params.realm,
        grant_type: params.granType,
    });

    const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://wsdev.sat.gob.pe/auth/v2/login",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    const response = await axios.request(config);
    return { accessToken: response.data.access_token } as LoginResponse;
}

async function generarUrlToken(accessToken: string) {
    const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://172.29.55.54:8010/v1/url?cc=301356&cr=1",
        //url: "http://172.29.170.36:5555/v1/url?cc=301356&cr=1",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const response = await axios.request(config);

    return response.data.url;
}

export { login, generarUrlToken };
