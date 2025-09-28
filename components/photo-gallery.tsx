'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface Photo {
  src: string
  alt: string
}

interface PhotoGalleryProps {
  isOpen: boolean
  onClose: () => void
  title: string
  photos: Photo[]
}

export function PhotoGallery({ isOpen, onClose, title, photos }: PhotoGalleryProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-[80vh] w-full max-w-4xl p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-center text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>

        <div className="relative flex flex-1 items-center justify-center p-6">
          {/* Horizontal Scrollable Image Strip */}
          <div className="flex h-full w-full snap-x snap-mandatory items-center overflow-x-auto pb-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative flex aspect-video w-full flex-shrink-0 snap-center items-center justify-center"
              >
                <Image
                  src={photo.src || '/Portfolio_V2/placeholder.svg'}
                  alt={photo.alt}
                  fill // Use fill for responsive images within a container
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
