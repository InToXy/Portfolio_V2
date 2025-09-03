"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

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
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-center">{title}</DialogTitle>
        </DialogHeader>

        <div className="relative flex-1 flex items-center justify-center p-6">
          {/* Horizontal Scrollable Image Strip */}
          <div className="flex overflow-x-auto snap-x snap-mandatory w-full h-full items-center pb-4">
            {photos.map((photo, index) => (
              <div key={index} className="flex-shrink-0 w-full snap-center flex justify-center items-center aspect-video">
                <img
                  src={photo.src || "/Portfolio_V2/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}