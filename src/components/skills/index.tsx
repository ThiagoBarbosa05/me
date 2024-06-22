'use client'
import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import { imagesList } from './images-list'

const animation = { duration: 6000, easing: (t: number) => t }

export function Skills() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    slides: { perView: 10, spacing: 16 },
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <div
      ref={sliderRef}
      className="keen-slider mb-5 bg-primary-dark-blue/75 py-2"
    >
      {imagesList.map((image, i) => (
        <div className="keen-slider__slide" key={i}>
          <Image
            src={image}
            width={500}
            height={500}
            alt=""
            className="h-10 w-10"
          />
        </div>
      ))}
    </div>
  )
}
