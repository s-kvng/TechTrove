const ROUTES = {
    HOME : "/",
    SIGN_IN : "/sign-in",
    SIGN_UP : "/sign-up",
    COMUNITY: "/community",
    COLLECTION: "/collection",
    JOBS: "/jobs",
    TAGS: (id: string): string => `/tags/${id}`,
    PROFILE: (id: string): string => `/profile/${id}`,
    QUESTION: (id: string): string => `/question/${id}`,
    ASK_QUESTION: "/ask-question",
}

export default ROUTES