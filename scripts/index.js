'use strict'
/* global bookmarkList, api */
/* eslint-env jquery */ 
//https://[org-name].github.io/[repo-name]

$(function() {
    bookmarkList.bindEventListeners();

    api.getItems((items) => {
        items.forEach((item) => store.addItem(item));
        bookmarkList.render();
    });
});


