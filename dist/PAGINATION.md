## All possible pagination options and default value

const paginationOptions = {
currentPage: currentPage, //required
pageSize: pageSize, //required
onPageChange: onPageChange, //required
totalData: totalData, //required
};

## Available Instance Return from Pagination

totalPageCount

## demo of using it

      <Pagination {...paginationOptions} />
