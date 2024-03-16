import {initTRPC} from "@trpc/server";

export const t = initTRPC.create();
import {Component} from "ui";

export const {router} = t;
export const {procedure} = t;
