export type List = {
    list_id: string;
    list_name: string;
};

export type CreateListOptions = {
    list_name: string;
};

export type CreateListResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        list_id: string;
        list_name: string;
    };
};

export type UpdateListOptions = {
    list_name: string;
};

export type UpdateListResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        list_id: string;
        list_name: string;
    };
};

export type ListsList = {
    statusCode: number;
    status: string;
    data: List[];
};

export type RetrieveListResponse = {
    statusCode: number;
    status: string;
    data: {
        list_id: string;
        list_name: string;
    };
};

export type DeleteListResponse = {
    statusCode: number;
    status: string;
    message: string;
    data: {
        list_id: string;
    };
};
