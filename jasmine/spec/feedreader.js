$(function() {

  // suite for the RSS Feeds
  describe('RSS Feeds', function() {

    // test to check if allFeeds is defined and not empty
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // test to make sure URLs are defined and not empty
    it('is defined and has a url', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    // test to make sure names are defined and not empty
    it('is defined and has a name', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      });
    });

  });

  // suite to test the menu functions
  describe('The Menu', function() {

    // test to check if menu is hidden as a default
    it('has menu hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    // test to check if the menu is toggled when clicked
    it('menu should toggle visibilty when clicked', function() {
      var menuIcon = $('.menu-icon-link');

      menuIcon.click();

      expect($('body').hasClass('menu-hidden')).toBe(false);

      menuIcon.click();

      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });


  // suite to check to make sure theres content
  describe('Initial Entries', function() {

    // before each function to call loadFeed
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    // test to check if .feed is empty
    it('.feed should not empty after calling loadFeed', function() {
      expect($('.feed').length).not.toBe(0);
    });

  });

  // suite to check for a new feed selection
  describe('New Feed Selection', function() {

    var initialContent, // variable for initial content
        changedContent; // variable for the next content loaded

    // before each to store content within variables
    beforeEach(function(done) {
      loadFeed(0, function() {
        initialContent = $('.header-title').html();
        loadFeed(1, function() {
        changeContent = $('.header-title').html();
        done();
        });
      });
    });

    // test to check if initial content has changed
    it('new feed should change content', function(done) {
      expect(initialContent !== changedContent).toBe(true);
      done();
      });
    });


}());
