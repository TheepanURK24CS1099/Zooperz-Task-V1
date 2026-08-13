import { rainsValueProps } from '../../data/rains'

export default function RainsValueProps() {
  return (
    <ul className="value-props">
      {rainsValueProps.map((item) => (
        <li key={item} className="value-props__item">{item}</li>
      ))}
    </ul>
  )
}
