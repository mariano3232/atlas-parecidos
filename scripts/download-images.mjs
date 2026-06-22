import { mkdir, writeFile } from 'fs/promises'
import { createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import { Readable } from 'stream'

const images = [
  { name: 'hero-twins', url: 'https://www.figma.com/api/mcp/asset/ddba2220-8206-4407-9a01-3425197e2914', ext: 'jpeg' },
  { name: 'img-0518', url: 'https://www.figma.com/api/mcp/asset/119072ee-cbd5-4318-baa8-1be567248936', ext: 'jpeg' },
  { name: 'img-f11e8b4c', url: 'https://www.figma.com/api/mcp/asset/86ad1b06-9c6d-405f-b59c-2d99ebfaa16b', ext: 'jpeg' },
  { name: 'img-0509', url: 'https://www.figma.com/api/mcp/asset/e4fd30cd-59d7-4913-aaff-e3217ff80955', ext: 'jpeg' },
  { name: 'img-0466', url: 'https://www.figma.com/api/mcp/asset/0f9f3bca-f001-4ca1-a1f4-5b2653289146', ext: 'jpeg' },
  { name: 'img-42dcc1', url: 'https://www.figma.com/api/mcp/asset/ca7a8090-59f9-482f-bbb9-7a51cf0f1525', ext: 'jpeg' },
  { name: 'photo-09', url: 'https://www.figma.com/api/mcp/asset/55a5ee2a-251e-4468-90e6-227669c912c1', ext: 'jpeg' },
  { name: 'photo-18', url: 'https://www.figma.com/api/mcp/asset/5c2a6b60-8128-48db-be5c-afa0c2cce24d', ext: 'jpeg' },
  { name: 'photo-2f017d', url: 'https://www.figma.com/api/mcp/asset/834ddac6-930b-4f73-b0bc-103447857689', ext: 'jpeg' },
  { name: 'img-0475', url: 'https://www.figma.com/api/mcp/asset/32e1d223-1319-4083-ae05-a63c8b7a58ae', ext: 'jpeg' },
  { name: 'img-0494', url: 'https://www.figma.com/api/mcp/asset/9fdd86fd-aff0-48fa-8324-241d507a4d5f', ext: 'jpeg' },
  { name: 'img-0513', url: 'https://www.figma.com/api/mcp/asset/17c39c8a-4840-476c-ade4-3f887e5abb1f', ext: 'jpeg' },
  { name: 'img-0474', url: 'https://www.figma.com/api/mcp/asset/9be78a24-be4b-4d2a-b631-139f0e873086', ext: 'jpeg' },
  { name: 'imagen2', url: 'https://www.figma.com/api/mcp/asset/69d5d5dc-8774-4aec-b81d-35d0c64de258', ext: 'png' },
  { name: 'photo-13', url: 'https://www.figma.com/api/mcp/asset/424f2829-3dff-4597-b5f7-bf15a295eb13', ext: 'jpeg' },
  { name: 'img-0459', url: 'https://www.figma.com/api/mcp/asset/d47142a7-8acb-4d29-bd83-3a22d76daf20', ext: 'jpeg' },
  { name: 'photo-04', url: 'https://www.figma.com/api/mcp/asset/0ea532f2-5fe7-45b8-b172-307c2bc81d09', ext: 'jpeg' },
  { name: 'img-3257', url: 'https://www.figma.com/api/mcp/asset/40ac634c-68e9-49ab-ac29-3313ba721be2', ext: 'jpeg' },
  { name: 'img-0512-3', url: 'https://www.figma.com/api/mcp/asset/34fd38b8-3e30-4ab2-a960-4dbd4bf6cc06', ext: 'jpeg' },
  { name: 'photo-22', url: 'https://www.figma.com/api/mcp/asset/823e48b0-b916-4e81-b427-d4f668d977c6', ext: 'jpeg' },
  { name: 'photo-01b', url: 'https://www.figma.com/api/mcp/asset/60678bf2-edf9-40b2-8ce2-cc9059c4a569', ext: 'jpeg' },
  { name: 'photo-16', url: 'https://www.figma.com/api/mcp/asset/463067e4-2a63-4f5b-a388-2129edcc6e0c', ext: 'jpeg' },
  { name: 'img-0508', url: 'https://www.figma.com/api/mcp/asset/63582c79-e4b5-48fa-a4ac-7881479cb06b', ext: 'jpeg' },
  { name: 'img-0499', url: 'https://www.figma.com/api/mcp/asset/0d536bc4-c478-4ead-8ff3-886b27771d43', ext: 'jpeg' },
  { name: 'photo-20', url: 'https://www.figma.com/api/mcp/asset/c005b032-e8da-4014-82a2-675e39126650', ext: 'jpeg' },
  { name: 'photo-17', url: 'https://www.figma.com/api/mcp/asset/85096746-553f-4d45-84df-320aae4cbce7', ext: 'jpeg' },
  { name: 'photo-05', url: 'https://www.figma.com/api/mcp/asset/432df8a1-c13d-4184-b0f4-26d0c31c9bd4', ext: 'jpeg' },
  { name: 'photo-19', url: 'https://www.figma.com/api/mcp/asset/733333e2-0bc4-4f39-8240-9c69bd2a17ab', ext: 'jpeg' },
  { name: 'photo-14', url: 'https://www.figma.com/api/mcp/asset/157beca6-f494-45c9-97c8-fc239c5a706a', ext: 'jpeg' },
  { name: 'photo-07', url: 'https://www.figma.com/api/mcp/asset/0fa0831d-1846-4797-bc7b-c4a2e117c95e', ext: 'jpeg' },
  { name: 'photo-5b72', url: 'https://www.figma.com/api/mcp/asset/2cc88a14-8d24-4ea6-8e15-ca4b7eef1c4f', ext: 'jpeg' },
  { name: 'img-0510', url: 'https://www.figma.com/api/mcp/asset/516a1a37-ab5a-4f90-b8f4-a8ff2214522e', ext: 'jpeg' },
  { name: 'photo-04-4', url: 'https://www.figma.com/api/mcp/asset/26443446-b91d-48d5-b40f-41365473b586', ext: 'png' },
  { name: 'photo-03', url: 'https://www.figma.com/api/mcp/asset/e8e1f391-1ed5-450c-8723-49d309c3c76d', ext: 'jpeg' },
  { name: 'photo-24', url: 'https://www.figma.com/api/mcp/asset/90999d42-4405-40b8-a975-b52eb55cbf96', ext: 'jpeg' },
  { name: 'img-0513-s', url: 'https://www.figma.com/api/mcp/asset/6a59bc95-194a-45c4-bf84-4b093e947816', ext: 'jpeg' },
  { name: 'photo-06', url: 'https://www.figma.com/api/mcp/asset/a8747165-6378-466a-93e3-a78fdb8251b0', ext: 'jpeg' },
  { name: 'gallery-04-2', url: 'https://www.figma.com/api/mcp/asset/09a07b0a-d2f7-4801-b4aa-f7e0fa4156ff', ext: 'png' },
  { name: 'gallery-03', url: 'https://www.figma.com/api/mcp/asset/e115e6f8-d62a-4262-a826-081d8d344168', ext: 'png' },
  { name: 'gallery-486d', url: 'https://www.figma.com/api/mcp/asset/0d536bc4-c478-4ead-8ff3-886b27771d43', ext: 'jpeg' },
  { name: 'gallery-23', url: 'https://www.figma.com/api/mcp/asset/c005b032-e8da-4014-82a2-675e39126650', ext: 'jpeg' },
  { name: 'gallery-384f', url: 'https://www.figma.com/api/mcp/asset/85096746-553f-4d45-84df-320aae4cbce7', ext: 'jpeg' },
  { name: 'gallery-ce3f', url: 'https://www.figma.com/api/mcp/asset/432df8a1-c13d-4184-b0f4-26d0c31c9bd4', ext: 'jpeg' },
  { name: 'gallery-0463', url: 'https://www.figma.com/api/mcp/asset/733333e2-0bc4-4f39-8240-9c69bd2a17ab', ext: 'jpeg' },
  { name: 'gallery-0518', url: 'https://www.figma.com/api/mcp/asset/157beca6-f494-45c9-97c8-fc239c5a706a', ext: 'jpeg' },
  { name: 'opinion-1', url: 'https://www.figma.com/api/mcp/asset/5e5bdec3-3421-4b09-897d-a0f8f0c1de1a', ext: 'jpeg' },
  { name: 'opinion-2', url: 'https://www.figma.com/api/mcp/asset/76a9da41-198a-43cd-96f9-7d124ee3fce9', ext: 'jpeg' },
  { name: 'opinion-3', url: 'https://www.figma.com/api/mcp/asset/b51a5328-1d40-4e46-ad2c-72f96eba7a21', ext: 'jpeg' },
  { name: 'opinion-4', url: 'https://www.figma.com/api/mcp/asset/f08e154d-7afd-4d40-abe2-a26bb49d6170', ext: 'jpeg' },
]

const outDir = new URL('../public/assets/images/', import.meta.url)

async function downloadImage({ name, url, ext }) {
  const filePath = new URL(`${name}.${ext}`, outDir)
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Failed ${name}: ${response.status}`)
  const buffer = Buffer.from(await response.arrayBuffer())
  await writeFile(filePath, buffer)
  console.log(`Downloaded ${name}.${ext}`)
}

await mkdir(outDir, { recursive: true })

for (const image of images) {
  try {
    await downloadImage(image)
  } catch (error) {
    console.error(error.message)
  }
}

console.log('Done')
