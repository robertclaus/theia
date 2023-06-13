// *****************************************************************************
// Copyright (C) 2023 Ericsson and others.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// This Source Code may also be made available under the following Secondary
// Licenses when the conditions for such availability set forth in the Eclipse
// Public License v. 2.0 are satisfied: GNU General Public License, version 2
// with the GNU Classpath Exception which is available at
// https://www.gnu.org/software/classpath/license.html.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
// *****************************************************************************

/* eslint-disable max-len */

export { ElectronClipboardService as common, ElectronClipboardService } from './electron-clipboard';
export { ElectronWindow } from './electron-window';
export { ElectronFrontendApplication } from './electron-frontend-application';
export { createIpcChannel, createIpcNamespace, IpcEvent, IpcListener, TheiaIpcMain, TheiaIpcMainEvent, TheiaIpcMainInvokeEvent, TheiaIpcRenderer, TheiaIpcRendererEvent, TheiaIpcRendererInvokeEvent, TheiaIpcWindow } from './messaging/electron-ipc';
export { ElectronKeyboardLayout, NativeKeyboardLayout } from './electron-keyboard-layout';
export { MenuDto, MenuRole } from './electron-menu';
export { ElectronShell } from './electron-shell';
export { ElectronSecurityToken, ElectronSecurityTokenService } from './electron-token';
export { AnyFunction, FunctionUtils } from './function-utils';
export { ELECTRON_INVOKE_IPC } from './messaging/electron-invoke';
export { ELECTRON_MAIN_RPC_IPC, RpcCancelMessage, RpcCreateMessage, RpcNotificationMessage, RpcPortForwardMessage, RpcRequestMessage, RpcRequestSyncMessage, RpcResponseMessage } from './messaging/electron-main-rpc';
export { ElectronRpcSync } from './messaging/electron-rpc-sync';
export { ElectronPreloadContribution, TheiaContextBridge } from './preload';
