/**
* This file was automatically generated by @cosmwasm/ts-codegen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery } from "react-query";
import { CanExecuteRelayResponse, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Coin, Empty, ExecuteMsgForEmpty, Addr, RelayTransaction, Guardians, MultiSig, InfoResponse, ContractVersion, InstantiateMsg, CreateWalletMsg, QueryMsg, Uint64 } from "./Govec.types";
import { GovecQueryClient } from "./Govec.client";
export interface GovecReactQuery<TResponse, TData = TResponse> {
  client: GovecQueryClient;
  options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface GovecCanExecuteRelayQuery<TData> extends GovecReactQuery<CanExecuteRelayResponse, TData> {
  args: {
    sender: string;
  };
}
export function useGovecCanExecuteRelayQuery<TData = CanExecuteRelayResponse>({
  client,
  args,
  options
}: GovecCanExecuteRelayQuery<TData>) {
  return useQuery<CanExecuteRelayResponse, Error, TData>(["govecCanExecuteRelay", client.contractAddress, JSON.stringify(args)], () => client.canExecuteRelay({
    sender: args.sender
  }), options);
}
export interface GovecInfoQuery<TData> extends GovecReactQuery<InfoResponse, TData> {}
export function useGovecInfoQuery<TData = InfoResponse>({
  client,
  options
}: GovecInfoQuery<TData>) {
  return useQuery<InfoResponse, Error, TData>(["govecInfo", client.contractAddress], () => client.info(), options);
}