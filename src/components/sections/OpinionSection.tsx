import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { ScrollHint } from '../layout/ScrollHint'
import { opinions } from '../../data/opinions'
import { imageSources } from '../../data/images'

export function OpinionSection() {
  return (
    <Section id="opiniones" className="bg-opinion-red" fullHeight={false}>
      <div className="relative px-6 py-10 md:px-12 md:py-14">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <DisplayText size="lg" className="max-w-md text-ink">
            No todos opinamos lo mismo
          </DisplayText>
          <ScrollHint hint="(↓↓↓)" />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-24 pb-16">
          {opinions.map((opinion) => (
            <article key={opinion.id} className="flex flex-col items-center gap-8">
              <div
                className="overflow-hidden border border-ink bg-opinion-red shadow-[4px_4px_0_#141313]"
                style={{ transform: `rotate(${opinion.rotation ?? 0}deg)` }}
              >
                <img
                  src={imageSources[opinion.imageId]}
                  alt=""
                  className="h-[18rem] w-[14rem] object-cover sm:h-[24rem] sm:w-[18rem] md:h-[28rem] md:w-[22rem]"
                />
              </div>
              <div className="max-w-2xl text-center">
                <DisplayText size="md" uppercase={false} className="mb-4 normal-case">
                  “{opinion.quote}”
                </DisplayText>
                <p className="font-display text-xl text-ink md:text-2xl">-{opinion.author}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
