"use client"

import React, { Suspense, useEffect, useMemo, useRef, useState, createContext, useContext } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  OrbitControls,
  Environment,
  Html,
  Plane,
  Sphere,
} from "@react-three/drei"
import { Download, Heart, X, ExternalLink } from "lucide-react"

/**
 * Single-file Stellar Card Gallery
 * - Context, Starfield, Galaxy, FloatingCard, Modal, and Page in one.
 */

type Card = {
  id: string
  imageUrl: string
  alt: string
  title: string
  client?: string
  views?: string
  link?: string
}

type CardContextType = {
  selectedCard: Card | null
  setSelectedCard: (card: Card | null) => void
  cards: Card[]
}

const CardContext = createContext<CardContextType | undefined>(undefined)

export function useCard() {
  const ctx = useContext(CardContext)
  if (!ctx) throw new Error("useCard must be used within CardProvider")
  return ctx
}

export const SANTIAGO_PORTFOLIO_CARDS: Card[] = [
  { id: "1", imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80", alt: "Maki Açaí Reel 1", title: "Maki Açaí • Viral 9:16", client: "Maki Açaí", views: "2.1M" },
  { id: "2", imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", alt: "Gran Pacífico Hotel", title: "Gran Pacífico • Showreel", client: "Gran Pacífico", views: "4.2M" },
  { id: "3", imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80", alt: "Algo Market Supermercado", title: "Algo Market • Tendencias", client: "Algo Market", views: "1.3M" },
  { id: "4", imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80", alt: "VitaNovaCL E-Commerce", title: "VitaNovaCL • Meta Ads", client: "VitaNovaCL", views: "840K" },
  { id: "5", imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80", alt: "Dimarín Náutica", title: "Dimarín • B2B Náutica", client: "Dimarín", views: "189K" },
  { id: "6", imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80", alt: "Maki Açaí Reel 2", title: "Maki Açaí • Delivery Boom", client: "Maki Açaí", views: "1.8M" },
  { id: "7", imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80", alt: "Dimarsa Moda", title: "Dimarsa • TikTok Viral", client: "Dimarsa", views: "50.6K" },
  { id: "8", imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80", alt: "Volterra Maquinarias", title: "Volterra • Maquinaria B2B", client: "Volterra", views: "120K" },
  { id: "9", imageUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80", alt: "Comercial NA Retail", title: "Comercial NA • Ofertas", client: "Comercial NA", views: "95K" },
  { id: "10", imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80", alt: "Meta Ads Scaling", title: "Estrategia ROAS ×5.41", client: "Meta Ads", views: "+29.5M" },
  { id: "11", imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80", alt: "Producción Audiovisual", title: "Grabación en Terreno", client: "Producción", views: "Pro Studio" },
  { id: "12", imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80", alt: "Growth Strategy", title: "Auditoría de Marcas", client: "Estrategia", views: "Full 360°" },
]

export function CardProvider({ children, initialCards = SANTIAGO_PORTFOLIO_CARDS }: { children: React.ReactNode, initialCards?: Card[] }) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard, cards: initialCards }}>
      {children}
    </CardContext.Provider>
  )
}

function StarfieldBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x050505, 1)
    mountRef.current.appendChild(renderer.domElement)

    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 6000
    const positions = new Float32Array(starsCount * 3)
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1600
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1600
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1600
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const starsMaterial = new THREE.PointsMaterial({ color: 0x34d399, size: 0.8, sizeAttenuation: true })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    camera.position.z = 10

    let animationId = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      stars.rotation.y += 0.00015
      stars.rotation.x += 0.00008
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 w-full h-full z-0 bg-[#050505]" />
}

function FloatingCard({
  card,
  position,
}: {
  card: Card
  position: { x: number; y: number; z: number; rotationX: number; rotationY: number; rotationZ: number }
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const { setSelectedCard } = useCard()

  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position)
    }
  })

  const handleClick = (e: any) => {
    e.stopPropagation()
    setSelectedCard(card)
  }
  const handlePointerOver = (e: any) => {
    e.stopPropagation()
    setHovered(true)
    document.body.style.cursor = "pointer"
  }
  const handlePointerOut = (e: any) => {
    e.stopPropagation()
    setHovered(false)
    document.body.style.cursor = "auto"
  }

  return (
    <group ref={groupRef} position={[position.x, position.y, position.z]}>
      <Plane
        ref={meshRef}
        args={[4.5, 6]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshBasicMaterial transparent opacity={0} />
      </Plane>

      <Html
        transform
        distanceFactor={10}
        position={[0, 0, 0.01]}
        style={{
          transition: "all 0.3s ease",
          transform: hovered ? "scale(1.18)" : "scale(1)",
          pointerEvents: "none",
        }}
      >
        <div
          className="w-44 h-60 rounded-2xl overflow-hidden shadow-2xl bg-zinc-900/90 p-2.5 select-none backdrop-blur-md"
          style={{
            boxShadow: hovered
              ? "0 25px 50px rgba(16, 185, 129, 0.4), 0 0 30px rgba(56, 189, 248, 0.3)"
              : "0 15px 30px rgba(0, 0, 0, 0.8)",
            border: hovered ? "2px solid rgba(16, 185, 129, 0.8)" : "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <div className="relative w-full h-44 rounded-xl overflow-hidden mb-2">
            <img
              src={card.imageUrl || "/placeholder.svg"}
              alt={card.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
            {card.views && (
              <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                {card.views}
              </span>
            )}
          </div>
          <div className="text-center px-1">
            <p className="text-white text-xs font-bold truncate leading-tight">{card.title}</p>
            {card.client && (
              <p className="text-emerald-400 text-[10px] font-medium mt-0.5">{card.client}</p>
            )}
          </div>
        </div>
      </Html>
    </group>
  )
}

function CardModal() {
  const { selectedCard, setSelectedCard } = useCard()
  const [isFavorited, setIsFavorited] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  if (!selectedCard) return null

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.5s ease-out"
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }
  }

  const toggleFavorite = () => setIsFavorited((v) => !v)
  const handleClose = () => setSelectedCard(null)
  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md" onClick={handleBackdropClick}>
      <div className="relative max-w-md w-full mx-4">
        <button onClick={handleClose} className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors z-10">
          <X className="w-8 h-8" />
        </button>

        <div style={{ perspective: "1000px" }} className="w-full">
          <div
            ref={cardRef}
            className="relative cursor-pointer rounded-3xl bg-zinc-900 border border-white/15 p-5 transition-all duration-500 ease-out w-full shadow-2xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full mb-4 rounded-2xl overflow-hidden" style={{ aspectRatio: "9 / 16", maxHeight: "380px" }}>
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                alt={selectedCard.alt}
                src={selectedCard.imageUrl || "/placeholder.svg"}
              />
              {selectedCard.views && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold">
                  {selectedCard.views}
                </span>
              )}
            </div>

            <div className="text-center mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">{selectedCard.client || "Contenido Viral"}</span>
              <h3 className="text-white text-xl font-extrabold mt-1">{selectedCard.title}</h3>
            </div>

            <div className="flex gap-2">
              <a
                href="https://wa.me/56999967272?text=Hola%20Santiago,%20vi%20tu%20galeria%203D%20y%20quiero%20cotizar."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition duration-300 active:scale-[0.97]"
              >
                <span>Cotizar Proyecto Similar</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={toggleFavorite}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 text-white hover:text-emerald-400 border border-white/10 transition duration-300"
              >
                <Heart className="h-5 w-5" fill={isFavorited ? "#10B981" : "none"} color={isFavorited ? "#10B981" : "currentColor"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CardGalaxy() {
  const { cards } = useCard()

  const cardPositions = useMemo(() => {
    const positions: {
      x: number
      y: number
      z: number
      rotationX: number
      rotationY: number
      rotationZ: number
    }[] = []
    const numCards = cards.length
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    for (let i = 0; i < numCards; i++) {
      const y = 1 - (i / (numCards - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = (2 * Math.PI * i) / goldenRatio
      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY
      const layerRadius = 13 + (i % 3) * 3.5

      positions.push({
        x: x * layerRadius,
        y: y * layerRadius,
        z: z * layerRadius,
        rotationX: Math.atan2(z, Math.sqrt(x * x + y * y)),
        rotationY: Math.atan2(x, z),
        rotationZ: (Math.random() - 0.5) * 0.2,
      })
    }
    return positions
  }, [cards.length])

  return (
    <>
      <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#047857" transparent opacity={0.2} wireframe />
      </Sphere>
      <Sphere args={[12, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#10b981" transparent opacity={0.04} wireframe />
      </Sphere>
      <Sphere args={[16, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#38bdf8" transparent opacity={0.03} wireframe />
      </Sphere>

      {cards.map((card, i) => (
        <FloatingCard key={card.id} card={card} position={cardPositions[i]} />
      ))}
    </>
  )
}

export function StellarCardGallery({ cards = SANTIAGO_PORTFOLIO_CARDS, className = "h-[620px]" }: { cards?: Card[], className?: string }) {
  return (
    <CardProvider initialCards={cards}>
      <div className={`w-full relative overflow-hidden bg-[#050505] rounded-3xl border border-white/10 shadow-2xl ${className}`}>
        <StarfieldBackground />

        <Canvas
          camera={{ position: [0, 0, 16], fov: 60 }}
          className="absolute inset-0 z-10"
          onCreated={({ gl }) => {
            gl.domElement.style.pointerEvents = "auto"
          }}
        >
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.7} />
            <pointLight position={[-10, -10, -10]} intensity={0.4} />
            <CardGalaxy />
            <OrbitControls
              enablePan
              enableZoom
              enableRotate
              minDistance={6}
              maxDistance={32}
              autoRotate={true}
              autoRotateSpeed={0.6}
              rotateSpeed={0.6}
              zoomSpeed={1.1}
              panSpeed={0.8}
              target={[0, 0, 0]}
            />
          </Suspense>
        </Canvas>

        <CardModal />

        <div className="absolute top-6 left-6 z-20 text-white pointer-events-none">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
            Universo 3D Interactivo
          </span>
          <h3 className="text-2xl font-extrabold mt-2 tracking-tight">+257 Contenidos Creados</h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-xs">Arrastra para orbitar la galaxia 3D • Usa la rueda para hacer zoom • Clic en cualquier tarjeta</p>
        </div>
      </div>
    </CardProvider>
  )
}

export default StellarCardGallery;
