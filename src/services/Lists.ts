import { Yonoma } from "./Yonoma";
import {
    CreateListOptions,
    CreateListResponse,
    DeleteListResponse,
    ListsList,
    RetrieveListResponse,
    UpdateListOptions,
    UpdateListResponse,
} from "../types/lists";
import { ResourceEnums } from "../types/resource.enums";

export class Lists {
    constructor(private readonly yonoma: Yonoma) {}

    list(): Promise<ListsList> {
        return this.yonoma.request(`/${ResourceEnums.LISTS}/list`, {
            method: "GET",
        });
    }

    create(createList: CreateListOptions): Promise<CreateListResponse> {
        const body = JSON.stringify(createList);

        return this.yonoma.request(`/${ResourceEnums.LISTS}/create`, {
            method: "POST",
            body,
        });
    }

    retrieve(listId: string): Promise<RetrieveListResponse> {
        return this.yonoma.request(`/${ResourceEnums.LISTS}/${listId}`, {
            method: "GET",
        });
    }

    update(listId: string, updateList: UpdateListOptions): Promise<UpdateListResponse> {
        const body = JSON.stringify(updateList);

        return this.yonoma.request(`/${ResourceEnums.LISTS}/${listId}/update`, {
            method: "POST",
            body,
        });
    }

    delete(listId: string): Promise<DeleteListResponse> {
        return this.yonoma.request(`/${ResourceEnums.LISTS}/${listId}/delete`, {
            method: "DELETE",
        });
    }
}
