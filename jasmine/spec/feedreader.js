$(function() {

  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('is defined and has a url', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    it('is defined and has a name', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      });
    });

  });

  describe('The Menu', function() {

    it('has menu hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    it('menu should toggle visibilty when clicked', function() {
      var menuIcon = $('.menu-icon-link');

      menuIcon.click();

      expect($('body').hasClass('menu-hidden')).toBe(false);

      menuIcon.click();

      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  describe('Initial Entries', function() {

    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('.feed should not empty after calling loadFeed', function() {
      expect($('.feed').length).not.toBe(0);
    });

  });

  describe('New Feed Selection', function() {

    var initialContent,
        changedContent;

    beforeEach(function(done) {
      loadFeed(0, function() {
        initialContent = $('.header-title').html();
        loadFeed(1, function() {
        changeContent = $('.header-title').html();
        done();
        });
      });
    });

    it('new feed should change content', function(done) {
      expect(initialContent !== changedContent).toBe(true);
      done();
      });
    });


}());
