/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import { Client, generateClient, GraphQLResult } from "aws-amplify/api";
import { Observable } from "rxjs";

export type __SubscriptionContainer = {
  onCreateBook: OnCreateBookSubscription;
};

export type BookInput = {
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  author: string;
  price: number;
};

export type Book = {
  __typename: "Book";
  bookId: string;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  author: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type OrderInput = {
  items?: Array<OrderItemInput | null> | null;
};

export type OrderItemInput = {
  bookId: string;
  quantity?: number | null;
};

export type BookPage = {
  __typename: "BookPage";
  books?: Array<Book | null> | null;
  nextToken?: string | null;
};

export type OrderItemsPage = {
  __typename: "OrderItemsPage";
  orderItems?: Array<OrderItem | null> | null;
  nextToken?: string | null;
};

export type OrderItem = {
  __typename: "OrderItem";
  userId: string;
  orderId: string;
  book?: Book | null;
  quantity: number;
};

export type CreateBookMutation = {
  __typename: "Book";
  bookId: string;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  author: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type GetBookByIdQuery = {
  __typename: "Book";
  bookId: string;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  author: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type ListBooksQuery = {
  __typename: "BookPage";
  books?: Array<{
    __typename: "Book";
    bookId: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    author: string;
    price: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type MyOrdersQuery = {
  __typename: "OrderItemsPage";
  orderItems?: Array<{
    __typename: "OrderItem";
    userId: string;
    orderId: string;
    quantity: number;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateBookSubscription = {
  __typename: "Book";
  bookId: string;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  author: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  public client: Client;
  constructor() {
    this.client = generateClient();
  }
  async CreateBook(newBook?: BookInput): Promise<CreateBookMutation> {
    const statement = `mutation CreateBook($newBook: BookInput) {
        createBook(newBook: $newBook) {
          __typename
          bookId
          title
          description
          imageUrl
          author
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (newBook) {
      gqlAPIServiceArguments.newBook = newBook;
    }
    const response = (await this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    })) as any;
    return <CreateBookMutation>response.data.createBook;
  }

  /*
  async CreateOrder(newOrder?: OrderInput): Promise<CreateOrderMutation> {
    const statement = `mutation CreateOrder($newOrder: OrderInput) {
        createOrder(newOrder: $newOrder)
      }`;
    const gqlAPIServiceArguments: any = {};
    if (newOrder) {
      gqlAPIServiceArguments.newOrder = newOrder;
    }
    const response = (await this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    })) as any;
    return <CreateOrderMutation>response.data.createOrder;
  } */

  async GetBookById(bookid: string): Promise<GetBookByIdQuery> {
    const statement = `query GetBookById($bookid: ID!) {
        getBookById(bookid: $bookid) {
          __typename
          bookId
          title
          description
          imageUrl
          author
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      bookid
    };
    const response = (await this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    })) as any;
    return <GetBookByIdQuery>response.data.getBookById;
  }
  async ListBooks(limit: number, nextToken?: string): Promise<ListBooksQuery> {
    const statement = `query ListBooks($limit: Int!, $nextToken: String) {
        listBooks(limit: $limit, nextToken: $nextToken) {
          __typename
          books {
            __typename
            bookId
            title
            description
            imageUrl
            author
            price
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      limit
    };
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    })) as any;
    return <ListBooksQuery>response.data.listBooks;
  }
  async MyOrders(limit: number, nextToken?: string): Promise<MyOrdersQuery> {
    const statement = `query MyOrders($limit: Int!, $nextToken: String) {
        myOrders(limit: $limit, nextToken: $nextToken) {
          __typename
          orderItems {
            __typename
            userId
            orderId
            quantity
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      limit
    };
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await this.client.graphql({
      query: statement,
      variables: gqlAPIServiceArguments
    })) as any;
    return <MyOrdersQuery>response.data.myOrders;
  }
  
  OnCreateBookListener(): Observable<
    GraphQLResult<Pick<__SubscriptionContainer, "onCreateBook">>
  > {
    return this.client.graphql({
      query: `subscription OnCreateBook {
        onCreateBook {
          __typename
          bookId
          title
          description
          imageUrl
          author
          price
          createdAt
          updatedAt
        }
      }`
    }) as any;
  }
}
