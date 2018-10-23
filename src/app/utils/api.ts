import { environment as Environment } from '../../environments/environment';

/**
 * The URL endpoint to connect the app to the staging server or to the testing server
 * @type string
 */
export const URL = Environment.production ? 'https://staging.agoramonitor.com/api' : 'https://staging.agoramonitor.com/api';
//export const URL = Environment.production ?  "http://search-api.waaw.io/api" : "http://search-api.waaw.io/api";
/**
 * An Object that holds all the api endpoints of the backend
 * @type {Object}
 */
export const API = {
    URL: URL,
    Authentication: {
        Login: {
            normal: `${URL}/auth/normal`,
            instaUser: `${URL}/auth/insta-user`,
            me: `${URL}/auth/me`
        },
        refreshToken: `${URL}/auth/refresh-token`,
        forgotPassword: `${URL}/auth/forgot-password`,
        resetPassword: `${URL}/auth/reset-password`,
        logout: `${URL}/auth/logout`,
        resendActivationLink: `${URL}/auth/resend-activation-link`,
        activate: `${URL}/auth/activate`,
        register: `${URL}/auth/register`,

    },
    Hashtags: {
        hashtags: `${URL}/hash-tags`,
        total: `${URL}/hash-tags/total`,
    },
    contactUs: `${URL}/contact-us`,
    search: {
        usersHashtags: `${URL}/search/users-hashtags`,
        users: `${URL}/search/users`,
        hashtags: `${URL}/search/hashtags`,
    },
    support: `${URL}/support`,
    invoices: `${URL}/invoices`,
    statistics: `${URL}/statistics/most-liked-commented-posts`,
    account : {
        postsHistory: `${URL}/account/active/posts-history`,
        showInfo: `${URL}/account/active/show-info`,
        showLastSevenDays: `${URL}/account/active/show-last-seven-days-info`,
        likes: `${URL}/account/active/likes`,
        posts: `${URL}/account/active/media`,
        account: `${URL}/account`,
        changeRelation: `${URL}/account/change-relation`,
        followers: `${URL}/account/followers`,
        following: `${URL}/account/following`,
        statistics: `${URL}/account/statistics`,
        LikesCommentsTotal: `${URL}/account/likes-comments/total`,
        LikesCommentsStatistics: `${URL}/account/likes-comments/statistics`,

    },
    accountSettings: {
        accountSettings: `${URL}/account-settings`,
        plans: `${URL}/account-settings/plans`,
        planChange: `${URL}/account-settings/plan-change`,
        subscription: `${URL}/account-settings/subscription`,
        changePassword: `${URL}/account-settings/change-password`,
        card: `${URL}/account-settings/card`,
    },
    feedsApi: {
        feedsApi: `${URL}/feeds-api`,
        addItems: `${URL}/feeds-api/add-items`,
    },
    competitors: {
        competitors: `${URL}/competitors`,
        competitor: `${URL}/competitors`,
        postsHistory: `${URL}/competitors/posts-history`,
        statistics: `${URL}/competitors/statistics`,
        allStatistics: `${URL}/competitors/all-statistics`,
    },
    media : {
        media: `${URL}/media`,
        comments: `${URL}/media`,
        like: `${URL}/media/like`,
        unlike: `${URL}/media/unlike`,
        deleteComment: `${URL}/media/delete-comment`,
    }
};
