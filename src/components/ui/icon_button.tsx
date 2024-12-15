function IconButton({ icon: Icon, isActive = false, onClick }: { icon: React.ElementType; isActive?: boolean, onClick?: () => void }) {
    return (
      <button
        className={`w-12 h-12 flex items-center justify-center text-[#858585] hover:text-white ${
          isActive ? 'border-l-2 border-white text-white' : ''
        }`}
        onClick={onClick}
      >
        <Icon size={24} />
      </button>
    )
  }

export { IconButton };
  