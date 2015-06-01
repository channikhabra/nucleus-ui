var statusRows = [{
  subcontentClasses: 'nucleus-tree-git-file-status',
  status: 'M',
  statusClasses: 'status--modified',
  filename: '_base.scss',
  filepath: '/client/styles'
}, {
  subcontentClasses: 'nucleus-tree-git-file-status',
  status: 'D',
  statusClasses: 'status--deleted',
  filename: '_fake.scss',
  filepath: '/client/styles'
}];

Template.nucleusSidebarGit.helpers({
  header: function() {
    return {
      title: 'Changes',
      badgeCount: 2,
      actions: [{
        id: 'git-sidebar-action__clean-all',
        title: 'Clean All',
        labelClasses: 'icon icon-undo'
      }, {
        id: 'git-sidebar-action__stage-all',
        title: 'Stage All',
        labelClasses: 'icon icon-add'
      }]
    };
  },
  statusRows: function() {
    return statusRows;
  }
});
