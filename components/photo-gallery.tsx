"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-center">{title}</DialogTitle>
        </DialogHeader>

        <div className="relative flex-1 flex items-center justify-center p-6">
          {/* Main Image */}
          <div className="relative w-full h-full max-h-[60vh] flex items-center justify-center">
            <img
              src={photos[currentIndex]?.src || "/placeholder.svg"}
              alt={photos[currentIndex]?.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />

            {/* Navigation Buttons */}
            {photos.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={prevPhoto}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={nextPhoto}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Thumbnails */}
        {photos.length > 1 && (
          <div className="flex justify-center gap-2 p-6 pt-0">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex ? "border-primary scale-110" : "border-muted hover:border-primary/50"
                }`}
              >
                <img src={photo.src || "/placeholder.svg"} alt={photo.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Photo Counter */}
        {photos.length > 1 && (
          <div className="text-center text-sm text-muted-foreground pb-4">
            {currentIndex + 1} / {photos.length}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
