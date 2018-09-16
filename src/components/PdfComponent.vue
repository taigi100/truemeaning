<template>
  <div>
    <div onclick="window.Book.prevPage();">‹</div>
    <div id="area" style="height: 550px"></div>
    <div onclick="window.Book.nextPage();">›</div>
  </div>
</template>
<script>

window.Book.on('renderer:locationChanged', function (locationCfi) {
  console.log('renderer page changed')
  console.log(window.$('#document').find('p'))
})

export default {
  name: 'PdfComponent',
  mounted: function () {
    this.$nextTick(function () {
      window.Book.renderTo('area')
    })
  }
}

</script>
