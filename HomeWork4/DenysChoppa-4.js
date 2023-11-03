class PaginationHelper {
    collection = [];
    itemsPerPage;
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length;
    }
    pageCount() {
        // returns the number of pages
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        if(pageIndex > (this.pageCount() - 1) || pageIndex < 0){
            return -1;
        }
        return (pageIndex === (this.pageCount() - 1)) ? ((this.itemCount() % this.itemsPerPage === 0) ? this.itemsPerPage : this.collection.length % this.itemsPerPage) : this.itemsPerPage;
    }
    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        if(itemIndex > (this.itemCount() - 1) || itemIndex < 0){
            return -1;
        }
        return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
    }
}

var helper = new PaginationHelper(['a','b','c','d','e'], 5);
console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(0));// should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1