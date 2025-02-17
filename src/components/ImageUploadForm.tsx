interface ImageUploadFormProps {
  preview: string
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  onBack: () => void
}

const ImageUploadForm = ({ preview, onImageChange, onSubmit, onBack }: ImageUploadFormProps) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const fileInput = document.getElementById('image-upload') as HTMLInputElement
    const file = fileInput?.files?.[0]
    
    if (!file) {
      alert('Please select an image to upload')
      return
    }

    onSubmit(e)
  }

  return (
    <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800/50 backdrop-blur-xl">
      <h2 className="text-2xl font-semibold text-neutral-200 mb-8 text-left">Retinal Image Upload</h2>
      <div className="space-y-6">
        <div className="border-2 border-dashed border-neutral-700/50 rounded-xl p-8 text-center hover:border-primary-500/50 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={onImageChange}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer block"
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="max-h-80 mx-auto rounded-lg"
              />
            ) : (
              <div className="space-y-4">
                <svg className="mx-auto h-16 w-16 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-neutral-400">Click or drag and drop to upload retinal image</p>
              </div>
            )}
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            className="w-1/3 px-6 py-4 rounded-xl bg-neutral-800 text-neutral-300 font-medium hover:bg-neutral-700 transition-all duration-300"
          >
            Back
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-2/3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 focus:ring-2 focus:ring-primary-500/50"
          >
            Start Detection
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageUploadForm 