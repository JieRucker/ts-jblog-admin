var Crumb = /** @class */ (function () {
    function Crumb() {
    }
    Object.defineProperty(Crumb, "article_list", {
        get: function () {
            return [{
                    path: '',
                    title: '文章',
                    name: 'article',
                }, {
                    path: '/article/article-list',
                    title: '文章列表',
                    name: 'article-list',
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Crumb, "create_artcle", {
        get: function () {
            return [{
                    path: '',
                    title: '文章',
                    name: 'article',
                }, {
                    path: '/article/create-article',
                    title: '写文章',
                    name: 'create-article',
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Crumb, "tags_list", {
        get: function () {
            return [{
                    path: '',
                    title: '标签',
                    name: 'manage',
                }, {
                    path: '/tags/tags-list',
                    title: '标签列表',
                    name: 'tags-list',
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Crumb, "works_list", {
        get: function () {
            return [{
                    path: '',
                    title: '作品',
                    name: 'works',
                }, {
                    path: '/works/works-list',
                    title: '作品列表',
                    name: 'works-list',
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Crumb, "file_upload", {
        get: function () {
            return [{
                    path: '',
                    title: '上传',
                    name: 'upload',
                }, {
                    path: '/upload/file_upload',
                    title: '文件列表',
                    name: 'file_upload',
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Crumb, "mine", {
        get: function () {
            return [{
                    path: '',
                    title: '设置',
                    name: 'setting',
                }, {
                    path: '/setting/mine',
                    title: '个人信息',
                    name: 'mine',
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Crumb, "upyun", {
        get: function () {
            return [{
                    path: '',
                    title: '设置',
                    name: 'setting',
                }, {
                    path: '/setting/upyun',
                    title: '又拍云',
                    name: 'upyun',
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Crumb, "about", {
        get: function () {
            return [{
                    path: '',
                    title: '设置',
                    name: 'setting',
                }, {
                    path: '/setting/about',
                    title: '关于',
                    name: 'about',
                }];
        },
        enumerable: true,
        configurable: true
    });
    return Crumb;
}());
export default Crumb;
//# sourceMappingURL=crumb.js.map