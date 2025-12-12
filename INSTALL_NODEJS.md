# Installing Node.js on Windows

## Step 1: Download Node.js

1. Go to the official Node.js website: https://nodejs.org/
2. Download the **LTS (Long Term Support)** version (recommended)
   - This will download an installer file (`.msi`)

## Step 2: Install Node.js

1. Run the downloaded installer (`.msi` file)
2. Follow the installation wizard:
   - Click "Next" through the setup
   - Accept the license agreement
   - Choose installation location (default is fine)
   - **IMPORTANT**: Make sure "Add to PATH" option is checked (it should be by default)
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

## Step 3: Verify Installation

1. **Close and reopen your terminal/PowerShell** (important for PATH to update)

2. Verify Node.js is installed:
   ```powershell
   node --version
   ```
   Should show something like: `v20.x.x` or `v18.x.x`

3. Verify npm is installed:
   ```powershell
   npm --version
   ```
   Should show something like: `10.x.x` or `9.x.x`

## Step 4: Install Project Dependencies

Once Node.js is installed, you can install the project dependencies:

**Backend:**
```powershell
cd backend
npm install
```

**Frontend:**
```powershell
cd frontend
npm install
```

## Alternative: Using Chocolatey (if you have it)

If you have Chocolatey package manager installed:
```powershell
choco install nodejs-lts
```

## Troubleshooting

### If `node` or `npm` still not recognized after installation:

1. **Restart your computer** (sometimes required for PATH changes)
2. **Or manually add to PATH:**
   - Open System Properties → Environment Variables
   - Add Node.js installation path to System PATH
   - Default location: `C:\Program Files\nodejs\`

### Check if Node.js is installed but not in PATH:

1. Search for "Node.js" in Windows Start Menu
2. If you find it, it's installed but PATH might not be set correctly
3. Reinstall Node.js and ensure "Add to PATH" is checked

## After Installation

Once Node.js is installed, you can proceed with:
1. Installing dependencies (`npm install` in both frontend and backend)
2. Setting up environment variables (see README.md)
3. Running the application



