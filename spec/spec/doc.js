describe('Doc', function() {
  
  it('is an instance of SVG.Container', function() {
    expect(draw instanceof SVG.Container).toBe(true)
  })

  it('is an instance of SVG.Doc', function() {
    expect(draw instanceof SVG.Doc).toBe(true)
  })
  
  it('has a defs element', function() {
    expect(draw.defs() instanceof SVG.Defs).toBe(true)
  })

  describe('defs()', function() {
    it('returns defs element', function(){
      expect(draw.defs()).toBe(draw._defs)
    })
    it('references parent node', function(){
      expect(draw.defs().parent()).toBe(draw)
    })
  })
  
  describe('remove()', function() {
    it('removes the doc from the dom', function() {
      draw.remove()
      expect(document.getElementsByTagName('body')[0].querySelectorAll('svg').length).toBe(2)
      draw = SVG(drawing).size(100,100);
      expect(document.getElementsByTagName('body')[0].querySelectorAll('svg').length).toBe(3)
    })
  })
  
})