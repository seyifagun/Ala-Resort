export default class ApiRoutes {

    /**
     * The base url for the development environment
     */
    // static BASE_URL_DEV: string = "https://localhost:5560"; 

    /**
     * The base url for the live environment
     */
    static BASE_URL_LIVE: string = "https://api.dummy";

    /**
     * The base url for the test environment
     */
    static BASE_URL_TEST: string = "https://apitest.dummy";

    /**
     * The identity server token endpoint
     */
    static TokenEndpoint = "connect/token";
    
    /**
     * The route to the create newsletter subscriber
     */
    static CreateNewsletterSubscriber: string = "api/newsletter-subscriber/create";
    
    /**
     * The route to the create message
     */
    static CreateMessage: string = "api/message/create";
    
    /**
     * The route to the create tour schedule
     */
    static CreateTourSchedule: string = "api/tour-schedule/create";
}