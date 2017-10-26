export default class Consignment {
  constructor(consignment) {
    let parsed = JSON.parse(
      JSON.stringify(consignment), 
      (key, value) => {
        if (typeof value === 'string' && value.match(ISO_FORMAT)) {
          return new Date(value)
        } else if (value != null && typeof value === 'object') {
          if ('matrix' in value && 'rows' in value.matrix)
            return new Matrix(value.matrix)
          else if ('vector' in value 
            && Array.isArray(value.vector) 
            && value.vector.every(
              (item) => item != null
            && typeof item === 'object' 
            && 'label' in item 
            && 'value' in item))
            return new Vector(value.vector)
          else
            return value
        }
        return value
      }
    )
    for (var name in parsed) {
      this[name] = parsed[name]
    }
  }
}
