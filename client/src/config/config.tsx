import { LeanWebConfig } from './docs' // look here for documentation of the individual config options

const lean4webConfig : LeanWebConfig = {
  "projects": [
    { "folder": "ProofsLab",
      "name": "Proofs Lab with Verbose Lean",
      "examples": [
        { "file": "Exercises/f01_equalities_inequalities.lean",
          "name": "Inequalities and Equalities" }
        ]},
    { "folder": "Stable",
      "name": "Stable Lean" }
  ],
  "serverCountry": null,
  "contactDetails": null,
  "impressum": null
}

export default lean4webConfig
