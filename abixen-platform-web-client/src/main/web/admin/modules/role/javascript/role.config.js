/**
 * Copyright (c) 2010-present Abixen Systems. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

(function () {

    'use strict';

    angular
        .module('platformRoleModule')
        .config(platformRoleModuleConfig);

    platformRoleModuleConfig.$inject = [
        '$stateProvider'
    ];

    function platformRoleModuleConfig($stateProvider) {

        $stateProvider
            .state('application.roles', {
                url: '/roles',
                templateUrl: '/admin/modules/role/html/index.html'
            })
            .state('application.roles.list', {
                url: '/list',
                templateUrl: '/admin/modules/role/html/list.html',
                controller: 'RoleListController',
                controllerAs: 'roleList'
            })
            .state('application.roles.add', {
                url: '/add',
                templateUrl: '/admin/modules/role/html/edit.html',
                controller: 'RoleDetailController'
            })
            .state('application.roles.edit', {
                url: '/edit/:id',
                templateUrl: '/admin/modules/role/html/edit.html',
                controller: 'RoleDetailController'
            })
            .state('application.roles.permissions', {
                url: '/permissions/:id',
                templateUrl: '/admin/modules/role/html/permissions.html',
                controller: 'RoleDefinePermissionsController',
                controllerAs: 'roleDefinePermissions'
            });
    }
})();