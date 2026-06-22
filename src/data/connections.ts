export type ConnectionState = {
  id: string
  fromId: string
  toId: string
  label?: string
}

export const connectionStates: ConnectionState[] = [
  { id: 'conexion-1', fromId: 'gallery-04-2', toId: 'gallery-03', label: 'Conexión 1' },
  { id: 'conexion-2', fromId: 'gallery-486d', toId: 'gallery-384f', label: 'Conexión 2' },
  { id: 'conexion-3', fromId: 'gallery-23', toId: 'gallery-ce3f', label: 'Conexión 3' },
  { id: 'conexion-4', fromId: 'gallery-0463', toId: 'gallery-0518', label: 'Conexión 4' },
  { id: 'conexion-5', fromId: 'gallery-04-2', toId: 'gallery-486d', label: 'Conexión 5' },
  { id: 'conexion-6', fromId: 'gallery-03', toId: 'gallery-384f', label: 'Conexión 6' },
  { id: 'conexion-7', fromId: 'gallery-23', toId: 'gallery-0463', label: 'Conexión 7' },
  { id: 'conexion-8', fromId: 'gallery-ce3f', toId: 'gallery-0518', label: 'Conexión 8' },
]
