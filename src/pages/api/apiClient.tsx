import axios, { AxiosInstance } from "axios";
import ApiRoutes from "./apiRoutes";
import https from "https";


// create base route endpoint
const BASE_URL: string = ApiRoutes.BASE_URL_TEST;

// configure axios SSL certificate
const httpsAgent: https.Agent = new https.Agent({
    rejectUnauthorized: false
});

// use axios create method to create API variable
export const API: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    httpsAgent
});


/**
 * Api hook to create newsletter subscriber
 */
export function useCreateNewsletterSubscriber() {

    /**
     * API to Create Engager Address and Verify
     */
    async function createNewsletterSubscriber(data: {}) {

        // Make API request 
        const response = await API.post(ApiRoutes.CreateNewsletterSubscriber, data,
            // {
            //     // Set headers 
            //     headers: {
            //         Authorization: `Bearer ${bearerToken}`
            //     }
            // }
        );

        // Return the response
        return response;
    }

    return createNewsletterSubscriber;
}

/**
 * Api hook to create newsletter subscriber
 */
export function useCreateMessage() {

    /**
     * API to Create message
     */
    async function createMessage(data: {}) {

        // Make API request 
        const response = await API.post(ApiRoutes.CreateMessage, data,
            // {
            //     // Set headers 
            //     headers: {
            //         Authorization: `Bearer ${bearerToken}`
            //     }
            // }
        );

        // Return the response
        return response;
    }

    return createMessage;
}

/**
 * Api hook to create tour schedule
 */
export function useCreateTourSchedule() {

    /**
     * API to Create tour schedule
     */
    async function createTourSchedule(data: {}) {

        // Make API request 
        const response = await API.post(ApiRoutes.CreateTourSchedule, data);

        // Return the response
        return response;
    }

    return createTourSchedule;
}
