﻿
bingo.module('system', function () {

    bingo.action('roleList', function ($view) {
        $view.$getNode().show();

        $view.list = [{
            id: 1,
            name: '管理员',
            desc: '系统管理'
        }, {
            id: 2,
            name: '测试员',
            desc: '系统测试'
        }];

    });

});