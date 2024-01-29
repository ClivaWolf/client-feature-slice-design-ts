/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pc: 'var(--primary)',
        pcl: 'var(--primary-light)',
        pcd: 'var(--primary-dark)',

        ac: 'var(--accent)',
        acl: 'var(--accent-light)',
        acd: 'var(--accent-dark)',

        tx: 'var(--text)',
        txl: 'var(--text-light)',
        txd: 'var(--text-dark)',
      }
    },
  },
  plugins: [],
}

