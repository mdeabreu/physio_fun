import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const EXERCISES = [
  {
    key: 'penguin',
    title: 'Penguin Walks',
    icon: '🐧',
    description: 'Waddle like a penguin: heels together, toes out. Take small side-to-side steps with your arms at your sides like tiny flippers.',
    audio: 'music/penguin.mp3',
    image: 'images/penguin.png',
  },
  {
    key: 'soccer',
    title: 'Soccer Kicks',
    icon: '⚽',
    description: 'Stand tall and gently swing your leg forward like a kick. Alternate legs. Keep kicks low and controlled.',
    audio: 'music/soccer.mp3',
    image: 'images/soccer.png',
  },
  {
    key: 'frog',
    title: 'Frog Hops',
    icon: '🐸',
    description: 'Squat down with hands on the floor, then push through your legs to hop forward softly like a frog.',
    audio: 'music/frog.mp3',
    image: 'images/frog.png',
  },
  {
    key: 'butterfly',
    title: 'Butterfly Sits',
    icon: '🦋',
    description: 'Sit with the soles of your feet together. Gently flap your knees like butterfly wings while keeping your back tall.',
    audio: 'music/butterfly.mp3',
    image: 'images/butterfly.png',
  },
  {
    key: 'ninja',
    title: 'Ninja Crouch',
    icon: '🥷',
    description: 'Bend your knees low and tiptoe quietly like a sneaky ninja, ready for action!',
    audio: 'music/ninja.mp3',
    image: 'images/ninja.png',
  },
  {
    key: 'heel',
    title: 'Heel Walks',
    icon: '🦶',
    description: 'Lift your toes up and walk only on your heels — just like a penguin in funny shoes!',
    audio: 'music/heel.mp3',
    image: 'images/heel.png',
  },
  {
    key: 'flamingo',
    title: 'Flamingo Foot',
    icon: '🦩',
    description: 'Stand tall on one foot, then switch! Balance like a flamingo enjoying the sunshine.',
    audio: 'music/flamingo.mp3',
    image: 'images/flamingo.png',
  },
  {
    key: 'crab',
    title: 'Crab Walk',
    icon: '🦀',
    description: 'Sit on the floor, hands and feet down, then lift your hips and scuttle sideways like a happy crab.',
    audio: 'music/crab.mp3',
    image: 'images/crab.png',
  },
  {
    key: 'bear',
    title: 'Bear Crawl',
    icon: '🐻',
    description: 'Get on all fours and crawl like a bear, moving opposite arms and legs together.',
    audio: 'music/bear.mp3',
    image: 'images/bear.png',
  },
  {
    key: 'crane',
    title: 'Crane Truck',
    icon: '🏗️',
    description: 'Stand tall like a crane, grab your load from the ground, and lift it up high to the sky!',
    audio: 'music/crane.mp3',
    image: 'images/crane.png',
  },
  {
    key: 'duck',
    title: 'Duck Waddle',
    icon: '🦆',
    description: 'Waddle like a duck: feet together, knees out, and arms tucked behind your back. Quack, quack!',
    audio: 'music/duck.mp3',
    image: 'images/duck.png',
  },
]

export default function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-900">
      <header className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Physio Fun</h1>
        <div className="text-sm text-gray-600">Click a card to learn & listen</div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXERCISES.map(ex => (
            <motion.div key={ex.key} whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="cursor-pointer"
              onClick={() => { setActive(ex); setOpen(true) }}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center justify-center h-44">
                  <div className="text-6xl mb-3" aria-hidden>{ex.icon}</div>
                  <div className="text-lg font-semibold text-center">{ex.title}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 pb-10 text-xs text-gray-500">
        Made with ❤️ by Mama and Dada
      </footer>

      <Dialog open={open} onOpenChange={setOpen}>
        {active && (
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{active.title}</DialogTitle>
              <DialogDescription className="text-base text-gray-700">{active.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img src={active.image} alt={active.title} className="w-full rounded-lg mb-4 object-cover" />
              <audio autoPlay controls className="w-full">
                <source src={active.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
