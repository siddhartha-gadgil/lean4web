import { LeanWebConfig } from './docs' // look here for documentation of the individual config options

const lean4webConfig : LeanWebConfig = {
  "projects": [
    { "folder": "ProofsLab",
      "name": "Proofs Lab with Verbose Lean",
      "examples": [
        { "file": "Exercises/f01_equalities_inequalities.lean",
          "name": "Inequalities and Equalities" },
           { "file": "Exercises/f02_forall.lean",
          "name": "Universal Quantifiers" },
           { "file": "Exercises/f03_exists.lean",
          "name": "Existential Quantifiers" },
           { "file": "Exercises/f04_implication_equivalence.lean",
          "name": "Implications and Equivalences" },
           { "file": "Exercises/f05_or.lean",
          "name": "Disjunctions" },
           { "file": "Exercises/f06_and.lean",
          "name": "Conjunctions" },
           { "file": "Exercises/f07_limit_sequence.lean",
          "name": "Limits of Sequences" },
          { "file": "Exercises/f08_subsequences.lean",
          "name": "Subsequences" },
          { "file": "Exercises/f09_elementary_negation.lean",
          "name": "Elementary Negation" },
          { "file": "Exercises/f10_excluded_middle.lean",
          "name": "Excluded Middle" }
        ]},
    { "folder": "Stable",
      "name": "Stable Lean" }
  ],
  "serverCountry": null,
  "contactDetails": null,
  "impressum": null
}

export default lean4webConfig
