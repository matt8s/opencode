// Pipe writes are asynchronous, so the process exits before a large write is flushed unless the caller waits
// for it. Bun only reports completion through the callback of the write itself, not a later empty write.
export function writeStdout(text: string) {
  return new Promise<void>((resolve, reject) => {
    process.stdout.write(text, (error) => {
      if (error) return reject(error)
      resolve()
    })
  })
}
