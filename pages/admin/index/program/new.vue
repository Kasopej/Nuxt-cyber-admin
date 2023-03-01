<template src="~/components/pages_shared_templates/NewProgram.html"></template>

<script>
import NewProgramBase from '~/components/pages_base_definitions/NewProgram'
export default {
  extends: NewProgramBase,
  middleware: 'admin_auth',
  data() {
    return {
      form: {
        type: '',
        rewardGrid: {},
        scope: [{}],
        outofscope: [{}],
        tags: '',
        private: false,
        allowCollaborations: false,
        image: null,
        image2: null,
        company: null,
      },
    }
  },
  computed: {
    companyAccount() {
      return this.$vueBus.companyAccount
    },
  },
  created() {
    this.form.company = this.companyAccount._id
  },
}
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}

.step-header-reset {
  box-shadow: none !important;
  border: 1px solid #ccc;
}

.step-reset {
  box-shadow: none !important;
}

.program-title {
  font-size: 16px;
  font-weight: 500;
}

.head__line {
  font-size: 18px;
}

.custom-checkbox-card {
  position: relative;
  padding-left: 0;
  margin-right: 0;
}
.custom-checkbox-card-input {
  position: absolute;
  left: 0;
  opacity: 0;
}

.custom-checkbox-card-input:checked ~ .custom-checkbox-card-label {
  border-color: #c504da;
}

.custom-checkbox-card-label {
  display: inline-block;
  min-height: 100px;
  max-height: 100%;
  width: 100%;
  z-index: 1;
  border: 1px solid #e7eaf3;
  border-radius: 0.4rem;
  padding: 10px 10px 10px;
  cursor: pointer;
  margin-bottom: 0;
}

.custom-checkbox-card-input:checked ~ .custom-checkbox-card-label::after {
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 110 110' fill='%23377dff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M55,110L55,110C24.6,110,0,85.4,0,55v0C0,24.6,24.6,0,55,0h0c30.4,0,55,24.6,55,55v0C110,85.4,85.4,110,55,110zM81.6,31c-1.5-1.4-3.9-1.4-5.4,0.1L43.7,64.3l-8-9.6c-1.8-2.2-4.9-2.6-6.9-0.9c-1.8,1.5-2.1,4.1-0.9,6.2l10.2,17.3c2,3.3,6.7,3.6,9,0.5L82,36.2C83.3,34.7,83.1,32.4,81.6,31z'/%3E%3C/svg%3E")
    no-repeat right center/1rem 1rem;
}

.custom-checkbox-card-label::after {
  position: absolute;
  top: 0.75rem;
  right: 0;
  margin-right: 1rem;
  width: 1rem;
  height: 1rem;
  z-index: 1;
  content: '';
}
</style>
