import { services } from '../constants/linkAndConstants'
import ServiceCard from '../components/ServiceCard'
import React from "react"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services
