<template>
  <ul class="pagination">
    <li class="active"><a>1</a></li>
    <li class=""><a>2</a></li>
    <li class=""><a>3</a></li>
    <li class=""><a>4</a></li>
    <li class=""><a>5</a></li>
    <li class=""><a>6</a></li>
    <li class=""><a>7</a></li>
    <li class=""><a>8</a></li>
    <li class=""><a>9</a></li>
    <li class=""><a>10</a></li>
    <li class=""><a>11</a></li>

    <li>
      <a href="#" data-ci-pagination-page="2" rel="next"
        >Next<i class="fa fa-chevron-right"></i
      ></a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
#blog .pagination {
  margin-top: 70px;
  justify-content: center;
}
.pagination {
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}
.pagination li {
  margin: 0 5px 10px;
}

.pagination li a:hover,
.pagination li.active a,
.pagination li.active:hover a {
  color: #fff;
  background-color: #1977cc;
}
.pagination li a[rel='next'] {
  color: #333;
  background-color: #f8f8f8;
  padding: 18px 15px;
  border-radius: 5px;
  line-height: 1;
  font-size: 14px;
  text-transform: uppercase;
}
.pagination li a[rel='next'] .fa {
  font-size: 12px;
  padding-left: 10px;
}
.pagination li a {
  color: #333;
  background-color: transparent;
  padding: 18px 22px;
  border-radius: 5px;
  line-height: 1;
  font-size: 14px;
  display: block;
  font-weight: 600;
}
</style>
