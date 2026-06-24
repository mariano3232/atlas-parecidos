import { motion } from 'motion/react'
import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { ScrollHint } from '../layout/ScrollHint'
import { OpinionBackButton } from '../layout/OpinionBackButton'
import { getOpinionSet, type OpinionVariant } from '../../data/opinions'
import { imageSources } from '../../data/images'
import { EssayButton } from '../layout/EssayButton'

const ease = [0.22, 1, 0.36, 1] as const

type OpinionSectionProps = {
  variant: OpinionVariant
}

export function OpinionSection({ variant }: OpinionSectionProps) {
  const { opinions, classes } = getOpinionSet(variant)

  return (
    <Section id="opiniones" className={classes.section} fullHeight={false}>
      <div className="relative px-6 py-10 md:px-12 md:py-14">
        <motion.div
          className="fixed top-5 z-20 mb-10 flex flex-col gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
        >
          <div className="flex gap-6">
            <OpinionBackButton />
            <EssayButton />
          </div>
          <div className="flex flex-col gap-12 mt-12">
            <DisplayText size="custom" className="max-w-[350px] text-ink">
              No todos opinamos lo mismo
            </DisplayText>
            <ScrollHint hint="(↓↓↓)" />
          </div>
        </motion.div>

        <motion.div
          className="mx-auto flex max-w-3xl flex-col gap-24 pb-16 pt-[200px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.3 },
            },
          }}
        >
          {opinions.map((opinion) => (
            <motion.article
              key={opinion.id}
              className="flex flex-col items-center gap-8 z-99"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease },
                },
              }}
            >
              <div
                className={`overflow-hidden border w-xl h-[820px] border-ink ${classes.card}`}
                style={{ transform: `rotate(${opinion.rotation ?? 0}deg)` }}
              >
                <img
                  src={imageSources[opinion.imageId]}
                  alt=""
                  className="w-full object-cover h-[600px]"
                />
                <div className="text-center bg-blue mt-6">
                  <DisplayText size="md" uppercase={false} className="mb-4 w-[85%] mx-auto normal-case">
                    “{opinion.quote}”
                  </DisplayText>
                </div>    
                <p className="text-center font-[CustomFont] text-3xl text-ink mx-auto ">-{opinion.author}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
